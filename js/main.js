function validate() {
    if (document.forms["form"]["nama"].value == "") {
        alert("Error: Nama Masih Kosong");
        document.forms["form"]["nama"].focus();
        return false;
    }
    if (document.forms["form"]["nrp"].value == "") {
        alert("Error: NRP Masih Kosong");
        document.forms["form"]["nrp"].focus();
        return false;
    }
    if (document.forms["form"]["email"].value == "") {
        alert("Error: Email Masih Kosong");
        document.forms["form"]["email"].focus();
        return false;
    }
    if (document.forms["form"]["departemen"].selectedIndex == 0) {
        alert("Error: Departemen Masih Kosong");
        document.forms["form"]["departemen"].focus();
        return false;
    }
    if (document.forms["form"]["vaksin"].selectedIndex == 0 ) {
        alert("Error: Status Vaksinasi Masih Kosong");
        document.forms["form"]["vaksin"].focus();
        return false;
    }
}