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
object.contacts.phone = "+37378797334";
delete object.address;
console.log(object);