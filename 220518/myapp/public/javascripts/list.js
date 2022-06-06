const btn = document.getElementById('list');  // 목록으로
const update = document.getElementById('update');  // 수정하기
const del = document.getElementById('delete');  // 삭제하기

btn.addEventListener('click', () => {
    location.href = "/blog";
});

del.addEventListener('click', () => {
    fetch(`http://localhost:3000/blog/delete/${del.dataset.doc}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => window.location.href = data.redirect)
    .catch(err => console.log(err));
});

update.addEventListener('click', () => {
    location.href = `/blog/updateread/${update.dataset.doc}`;
})