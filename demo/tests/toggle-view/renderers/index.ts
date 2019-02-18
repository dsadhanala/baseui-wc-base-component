export const listRenderer = (listItems, html) =>
    listItems.map((item) => {
        console.log(item);
        return html(item, ':article')`
        <article>
            <img src="${item.avatar}" alt="${`${item.first_name}, ${item.last_name}`}" />
            <strong>${item.first_name}, ${item.last_name}</strong>
        </article>
    `;
    });
