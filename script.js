function getFormvalue(event) {
    //Write your code here
   event.preventDefault();
  const form = document.getElementById("loginForm");
  const firstName = form.fname.value.trim();
  const lastName  = form.lname.value.trim();
  alert([firstName, lastName].filter(Boolean).join(" "));
    }



