const posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

// Example usage:
createPost({ title: 'Post 1' })
    .then(() => updateLastUserActivityTime())
    .then(() => createPost({ title: 'Post 2' }))
    .then(() => updateLastUserActivityTime())
    .then(() => createPost({ title: 'Post 3' }))
    .then(() => updateLastUserActivityTime())
    .then(() => {
        console.log('All promises resolved');
        console.log('Posts:', posts);
        console.log('Last Activity Time:', lastActivityTime);

        return Promise.all([deletePost(), updateLastUserActivityTime()]);
    })
    .then(([deletedPost, updatedActivityTime]) => {
        console.log('Post Deleted:', deletedPost);
        console.log('Remaining Posts:', posts);
        console.log('Updated Last Activity Time:', updatedActivityTime);
    })
    .catch((error) => console.log(error));
