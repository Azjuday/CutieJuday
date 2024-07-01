document.getElementById('btnLike1').addEventListener('click', function() {
    let count = document.getElementById('countLike1');
    count.textContent = parseInt(count.textContent) + 1;
});

document.getElementById('btnDislike1').addEventListener('click', function() {
    let count = document.getElementById('countDislike1');
    count.textContent = parseInt(count.textContent) + 1;
});

document.getElementById('btnLike2').addEventListener('click', function() {
    let count = document.getElementById('countLike2');
    count.textContent = parseInt(count.textContent) + 1;
});

document.getElementById('btnDislike2').addEventListener('click', function() {
    let count = document.getElementById('countDislike2');
    count.textContent = parseInt(count.textContent) + 1;
});

document.getElementById('submit1').addEventListener('click', function() {
    let comment = document.getElementById('comment1').value;
    if (comment) {
        let comments = document.getElementById('comments1');
        let newComment = document.createElement('div');
        newComment.textContent = comment;
        comments.appendChild(newComment);
        document.getElementById('comment1').value = '';
    }
});

document.getElementById('submit2').addEventListener('click', function() {
    let comment = document.getElementById('comment2').value;
    if (comment) {
        let comments = document.getElementById('comments2');
        let newComment = document.createElement('div');
        newComment.textContent = comment;
        comments.appendChild(newComment);
        document.getElementById('comment2').value = '';
    }
});
