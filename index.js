const mainContent = document.getElementById('main-content')

document.querySelectorAll('a').forEach(link => {
    link.onclick= (e) => {
        e.preventDefault()
        fetch(link.href)
            .then(res => res.text())
            .then(html => mainContent.innerHTML = html)
            .catch(error => {
                console.log(error)
            })
    }
})