const element = document.getElementById("blog-posts");


function parseData(data){
    const article = document.createElement("article");
    article.setAttribute("id",data.id)
    const image = document.createElement("img")
        image.setAttribute("id","post-image")
        image.setAttribute("src",data.image)
        image.setAttribute("alt",data.imgAlt)
        

    const attr = document.createElement("a")
        attr.setAttribute("id","image-attribute")
        attr.setAttribute("href", data.imgAttr)

    const header = document.createElement("h2")
    const blogText = document.createElement("p")
        blogText.setAttribute("id","blog-text")
    const subHeading = document.createElement("h3")
        subHeading.setAttribute("id","sub-heading")
    const dateP = document.createElement("p")
        dateP.setAttribute("id","date")

    const title = document.createTextNode(data.title)
    const date = document.createTextNode(data.date)
    const text = document.createTextNode(data.post)
    const attrText = document.createTextNode("credit: " + data.imgAttrTxt)
    const sub = document.createTextNode(data.sub)

    
    article.appendChild(image)

    attr.appendChild(attrText)
        article.appendChild(attr)
        const tags = document.createElement("a")
        tags.setAttribute("id",data.tags[0])
        tags.setAttribute("id","tag")
        const tagSet = document.createTextNode("tags: " + data.tags[0])
        tags.appendChild(tagSet)
        article.appendChild(tags)

    header.appendChild(title)
        article.appendChild(header)
    
    subHeading.appendChild(sub)
        article.appendChild(subHeading)

    
    


    dateP.appendChild(date)
    article.appendChild(dateP)

    /*tags.forEach(v=>{
        const p = document.createElement("a")
            p.setAttribute("id",v)
       const n = document.createTextNode(v)
        p.appendChild(n)
        article.appendChild(p)
    })
*/

    blogText.appendChild(text)
    article.appendChild(blogText)
      
    element.appendChild(article)
    }

data.forEach(v=>{parseData(v)})