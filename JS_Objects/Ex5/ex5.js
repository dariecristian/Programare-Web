let object = {
    name: "Person",
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: "112",
		email: "email@domain.com"
    },
    address: "Moldova"
}
object.contacts.phone = "+37312345678";
delete object.address;
console.log(object);