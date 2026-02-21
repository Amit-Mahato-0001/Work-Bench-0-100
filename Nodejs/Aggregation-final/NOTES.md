$LOOKUP + $UNWIND

MongoDB noSQL he matlab:
collections separate
no automatic joins
SQL jaisa join nhi hota

isliye MongoDB me $lookup(manual join)

Humare pass:

users collection:
{
  _id: ObjectId("u1"),
  name: "Aman",
  email: "aman@gmail.com"
}

expenses collection:
{
  title: "Coffee",
  amount: 150,
  userId: ObjectId("u1")
}

$LOOKUP kya karta he??
$lookup ek collection ko dusre collection se connect karta he

syntax:
{
  $lookup: {
    from: "users",
    localField: "userId",
    foreignField: "_id",
    as: "userInfo"
  }
}

breakdown:
| Field        | Meaning                      |
| ------------ | ---------------------------- |
| from         | jis collection ko join karna |
| localField   | current collection ka field  |
| foreignField | target collection ka field   |
| as           | output ka field name         |

$LOOKUP output:

$lookup always array deta he.
{
  title: "Coffee",
  amount: 150,
  userId: ObjectId("u1"),
  userInfo: [
    {
      _id: ObjectId("u1"),
      name: "Aman",
      email: "aman@gmail.com"
    }
  ]
}

userInfo: [ {...} ] array he

ARRAY kyu??
ek userId multiple records match kar sakta he
mongoDB assume karte he many-to-many possibility
even ager 1 record ho array hi milega

$UNWIND kya karta he??
$unwind array ko tod deta he aur har element ko separate document bana deta he

before $unwind:
userInfo: [ {...} ]

after $unwind:
userInfo: {...}

code syntax:
{
    $unwind: "$userInfo"
}

FULL REAL PIPELINE:

Expense.aggregate([

  // Join users
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userInfo"
    }
  },

  // Remove array
  {
    $unwind: "$userInfo"
  },

  // Clean output
  {
    $project: {
      _id: 0,
      title: 1,
      amount: 1,
      userName: "$userInfo.name"
    }
  }

])

What it does internally:
step 1:
har expense ke sath matching user attach

step 2:
array tod diya

step 3:
sirf required fields return

MOST IMPORTANT EDGE CASE:

Ager $lookup match nhi karega:
userInfo: []
Aur fir $unwind lagega:
document delete ho jayega

isliye kabhi kabhi likhte he:
{
  $unwind: {
    path: "$userInfo",
    preserveNullAndEmptyArrays: true
  }
}
ye document delete nhi karega

$lookup kab slow hota he??
Ager:
foreign field pe index nhi he
large collections join ho rahi he
unnecessary fields fetch kar rahe ho

BEST PRACTICE:
join se pehle filter lagao:
{
  $match: { userId: someId }
}
phir $lookup, ye performance improve karta he



