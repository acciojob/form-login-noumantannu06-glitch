function getFormvalue() {
    //Write your code here
	event.preventDefault();

      const form = document.getElementById("loginForm");

      const firstName = form.fname.value.trim();
      const lastName = form.lname.value.trim();

      const fullName = [firstName, lastName].filter(Boolean).join(" ");

      alert(fullName);
    }



