INDEXING:

Indexing is a data structure technique used by MongoDB to optimize query performance by reducing the number of documents scanned during data retrieval operations.

simple: Index allows MongoDB to quickly locate documents without scanning the entire collection.

WHY WE NEED INDEXING??

without index:
db.orders.find({ userId: "123" })

MongoDB karega: 
every document check
collection scan(COLLSCAN)

With Index:
direct jump to matching entries
index scan(IXSCAN)

WHAT HAPPENS INTERNALLY??

MongoDB uses B-tree based indexes to maintain sorted data which enables efficient search, range queries, and sorting operations.

COLLSCAN VS IXSCAN??

| Term     | Meaning              |
| -------- | -------------------- |
| COLLSCAN | Full collection scan |
| IXSCAN   | Index scan           |

check using: 
db.orders.find({ userId: "123" }).explain("executionStats")

if you see:
"stage": "COLLSCAN" 
No index

if you see:
"stage": "IXSCAN"
Index scan

TYPES OF INDEXES:

1.Single Field Index
orderSchema.index({ userId: 1 })

use case: filter by userId

single field index improves queries filtering on one specific field.

2.Compound Index
orderSchema.index({ userId: 1, createdAt: -1 })

use case:
Order.find({ userId }).sort({ createdAt: -1 })

compound index supports queries that filter and sort on multiple fields in defined order.

MongoDb follows left prefix rule in compound indexes.

meaning:

if index is:
{ userId: 1, createdAt: -1 }

these work efficiently:
filter by userId ✅
filter by userId + createdAt ✅

this does not use index fully:
filter by createdAt only ❌


3.Multikey Index:
If field is array:
{
  tags: ["food", "electronics"]
}

MongoDB automatically creates multikey index
Multikey indexes are used when indexing array fields

4.Text Index
productSchema.index({ name: "text" })

used for search

5.Unique Index
userSchema.index({ email: 1 }, { unique: true })

prevents duplicate values

WRITE VS READ TRADEOFF
index improves read performance but slows down write operations because MongoDB must update the index whenever data changes.

WHEN SHOULD YOU ADD INDEX??
add index when:
field frequently used in filter
field used in join($lookup)
field used in sorting
field used in range queries

Q: Does MongoDB automatically create index?
Yes, _id field pe default index hota hai.

Q: What is compound index?
Index on multiple fields in defined order.

Q: What is index cardinality?
Uniqueness of values. Higher cardinality → better index performance.

Q: Can too many indexes hurt performance?
Yes, they increase memory usage and slow writes.