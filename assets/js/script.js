var searchObj = {
    search: "trump",
    beginDate: "20000101",
    endDate: "20181231",
    numRecords: "10",
    ajaxRequest: function () {
        const numCalls = Math.ceil(this.numRecords / 10);
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "7ba6fc42f4ea4be0bb7d7d26daca4537",
            'q': "Trump",
            'begin_date': "20000101",
            'end_date': "20181231",
            // 'sort': "newest"
        });
        for (i = 0; i < numCalls; i++) {
            var queryUrl = url + `&page=${i}`;
            console.log(queryUrl);
            $.ajax({
                url: queryUrl,
                method: 'GET',
            }).done(function (result) {
                console.log(result);
            }).fail(function (err) {
                throw err;
            });
        }
    }
}
searchObj.ajaxRequest();