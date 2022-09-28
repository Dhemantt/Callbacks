const posts = [
    { title: 'post one', body: 'this is post one' },
    { title: 'post two', body: 'this is post two' }
]

function getpost() {
    let output = ''
    setTimeout(() => {
        posts.forEach((post) => {
            output += `<li> ${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000)
}

// getpost();

function createpost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('Error: something went wrong');
            }
    })
    },2000)
}

createpost({ title: 'post three', body: 'this is post three' })
    .then(getpost)
    .catch(error);

