// Example Delete Logic
async function deleteEntry(type, id) {
const accessCode = prompt("ENTER ACCESS KEY TO PURGE DATA:");

if (accessCode === "RUPESH2026") {
// This is where we tell the database to remove the item
console.log(`Deleting ${type} with ID: ${id}`);
alert("ENTRY SUCCESSFULLY DELETED FROM DATABASE.");
location.reload();
} else {
alert("ACCESS DENIED: INVALID KEY.");
}
}