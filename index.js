let db=[]


function addUser(em, usr, prov=null){
    let defid=3999392939293

    if(prov == "google.com"){
        defid = defid + 2929
    }
    else if(prov == "github.com"){
        defid = defid + 3626
    }
    else if(prov == "microsoft.com"){
        defid = defid + 4821
    }

    const table={
        email: em,
        user: usr,
        id: defid,
    }

    db.push(table)
    console.log("-------PUSHING TABLE-------")
    console.log(db)
}

addUser("test@onet.pl", "Tester")
addUser("winuser@live.com", "WinUser", "microsoft.com")
addUser("example@domain.com", "GutUser", "github.com")
addUser("myfix@gmail.com", "Fixed USer", "google.com")