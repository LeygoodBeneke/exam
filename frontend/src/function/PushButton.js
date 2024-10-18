function PushButton({userId, itemId}) {

    function handleClick() {
        let e = document.getElementById("ddlViewBy");
        // let value = e.value;
        let text = e.options[e.selectedIndex].text;
        alert('Товар успешно передан пользователю!. Id товара' + itemId + '\n Id потзователя: ' + userId + '\nSDS:' + text);
        userId = "zzzzz";
    }

    // useEffect(() => {
    //     if (localStorage.getItem('user') !== null)
    //         fetch("/user/list", {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': localStorage.getItem('user')
    //             },
    //         })
    //             .then(res => res.json())
    //             .then(data => setUserList(data));
    // });


    return (
        <button onClick={handleClick}>передать</button>
    );
}

export default PushButton;