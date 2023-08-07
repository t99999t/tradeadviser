

function Calendar(){
function handleClick(event){
event.preventDefault();
console.log(event.target);
console.log(event.target.id);
}

return(
<>
<h1>Calendar</h1>
<p>This is a calendar</p>
<form onSubmit={handleClick}>
<input type="text" name="name"/>

<input type="submit" value="Submit"/>
</form>


</>
)
}
export default Calendar;