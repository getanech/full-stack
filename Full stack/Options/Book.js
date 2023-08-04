var Book = [
    {
        "Bookname": "revenge",
        "auther": "haim",
        "kategory": "action",
        "pages": 53,
        "questions": 3
    },

    {
        "Bookname": "Strong",
        "auther": "ben",
        "kategory": "action",
        "pages": 50,
        "questions": 5,
    },
    {
        "Bookname": "power",
        "auther": "adam",
        "kategory": "action",
        "pages": 60,
        "questions": 7,
    },
    {
        "Bookname": "the good life",
        "auther": "aviv",
        "kategory": "action",
        "pages": 90,
        "questions": 10,
    },
    {
        "Bookname": "On the way to the wedding we are stopping in Vegas",
        "auther": "eli",
        "kategory": "romanticism",
        "pages": 100,
        "questions": 6,
    },
    {
        "Bookname": "think fast think slow",
        "auther": "matan",
        "kategory": "comady",
        "pages": 102,
        "questions": 5,
    },
    {
        "Bookname": "rich Dad Poor Dad",
        "auther": "tal",
        "kategory": "inspection",
        "pages": 301,
        "questions": 9,
    },
    {
        "Bookname": "economy",
        "auther": "yair",
        "kategory": "Eko money",
        "pages": 302,
        "questions": 4,
    },
]
document.write("<h1>the name of book and name auther</h1>")
for (var i = 0; i < Book.length; i++) {
    document.write("", Book[i].Bookname + " : " + Book[i].auther + "<br>");
}
document.write("<hr>")
document.write("<h1> All books that have more than 300 pages</h1>")
for (i = 0; i < Book.length; i++) {
    if (Book[i].pages > 300)
        document.write(Book[i].Bookname + "<br>")
}
Mispar=""
document.write("<hr>")
document.write("<h1> All categories have more than 3 books</h1>")
var count = 0;
for (i = 0; i<Book.length; i++) {
    for (j =i+1; j < Book.length; j++) {
        if (Book[i].kategory == Book[j].kategory)
            count++;
    }
    if (count>=3){
        Mispar=Mispar+Book[i].kategory;
    }
    count=0;
}
document.write(Mispar+" "+4+" times")
document.write("<hr>")
document.write("<h1>Books borrowed more than twice\n</h1>")
for (i=0;i<Book.length;i++){
    if (Book[i].questions>2){
        document.write(Book[i].Bookname+"<br>")
    }
}