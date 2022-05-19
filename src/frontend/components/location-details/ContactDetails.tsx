let phoneNumber = "number";
let emailAddress = "email";


export const ContactDetails = () => {
  return (
    <div className="border-2 w-auto">
        <h2>Contact</h2>
        <form className="flex flex-col">
            <label>Phone Number</label>
            <a >({phoneNumber})</a>

            <label>Email Address</label>
            <a >({emailAddress})</a>

            <a >Add to favourites</a>

            <a >Navigate</a>
        </form>
    </div>
  )
}

export default ContactDetails;