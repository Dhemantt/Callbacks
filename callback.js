const posts = [
    { title: 'post one', body: 'this is post one', CreatedAt: new Date().getTime()  },
    { title: 'post two', body: 'this is post two', CreatedAt: new Date().getTime()  }
]

function getpost() {
    let output = ''
    setTimeout(() => {
        posts.forEach((post) => {
            output += `<li> ${post.title} - ${(new Date().getTime() - post.CreatedAt)/1000} sec ago</li>`
        });
        document.body.innerHTML = output;
    },1000)
}

// getpost();

function createpost(post, callback) {
    setTimeout(() => {
        posts.push({...post,  CreatedAt: new Date().getTime()});
        callback();
    },2000)
}

createpost({ title: 'post three', body: 'this is post three' }, getpost);
createpost({ title: 'post four', body: 'this is post four' }, getpost);

