Aggregation

MongoDB aggregation is a powerful framework used to process data through multiple stages and transform it into aggregated results.

simple:
jab CRUD se kaam na chale aur data ko calculate, filter, join karna ho

Kyu CRUD se kaam nahi chalta??
eg:
1. Total users kitne he?
2. Har user ke kitne orders he?
3. Month-wise revenue?
4. Active vs Inactive users count?

Ye normal find() se nahi hota, yahin aggregation aata he

Aggregation ka flow:

Collection
   ↓
Stage 1
   ↓
Stage 2
   ↓
Stage 3
   ↓
Final Result

har stage: data ko thoda-thoda transform karta he

Basic aggregation syntax:

Model.aggregate([
  { stage1 },
  { stage2 },
  { stage3 }
]);

Most important Aggregation stages:

1. $match (filter data)
ye find() jaisa hota he

{
  $match: { isActive: true }
}

2. $group: {
    _id: "$role",
    count: { $sum: 1 }
}

same type ke data ko ek jagah jama karna

OUTPUT: [
    { _id: "admin", count: 2 },
    { _id: "user", count: 10 }
]

3. $project (output shape control)
sirf jo chhaiye wo bhejo

{
    $project: {
        _id: 0,
        category: "$_id",
        totalAmount: 1
    }
}

OUTPUT: 
{
    category: "food"
    totalAmount: 300
}