exports.paginate = function(array, page, perPage, dataItem, jsonData) {
    let obj = {}
    let start = (page - 1) * perPage
    let end = page * perPage

    if (dataItem !== undefined && jsonData !== undefined) {
        array = validateData(array, jsonData, dataItem);
    }

    obj.items = [...array].slice(start, end)
    if (obj.items.length === 0) {
        return obj
    }

    if (page > 1) {
        obj.prev = page - 1
    }

    if (end < array.length) {
        obj.next = page + 1
    }

    if (obj.items.length !== array.length) {
        obj.current = page
        obj.first = 1
        obj.last = Math.ceil(array.length / perPage)
    }

    return obj
}

function validateData(array, jsonData, dataItem) {
    return array.filter(
        function(data) {
            if (typeof jsonData === 'string' && isNaN(jsonData) && isNaN(data[dataItem])) {
                return data[dataItem].toLowerCase() == jsonData.toLowerCase()
            } else {
                return data[dataItem] == parseInt(jsonData)
            }

            if (typeof jsonData === 'number') {

                return data[dataItem] == jsonData
            }

        }
    );
}