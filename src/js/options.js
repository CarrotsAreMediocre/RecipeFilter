function remove(e){
	browser.storage.sync.remove(e.target.id, function(){
		$(e.target).parent().hide();
	});
}

browser.storage.sync.get(null, function(data){
	for (site in data) {
		var row = `<tr>
			<td id="${site}" class="trash-cell" style="cursor:pointer;">&#9447;</td>
			<td>${site}</td>
		</tr>`;
		$('#blacklist tbody').append(row);
		$(`[id="${site}"]`).click(remove);
	}
});
