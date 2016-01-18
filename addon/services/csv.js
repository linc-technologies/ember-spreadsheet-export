import Ember from "ember";

export default Ember.Service.extend({

  export: function (data, fileName) {

    if (!fileName) {
      fileName = "export.csv";
    }

    function JSON2CSV(objArray) {
      var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

      var str = '';
      var line = '';

      // add heading row
      var head = array[0];
      for (var i = 0; i < head.length; i++) {
        var line = '';
        var value = head[i] + "";
        line += '"' + value.replace(/"/g, '""') + '",';
        str += line + '\r\n';
      }

      // add items
      for (var i = 1; i < array.length; i++) {
        var line = '';

        for (var index = 0; index < array[i].length; index++) {
          var value = array[i][index] + "";
          if (index > 0) {
            line += ',';
          }
          line += '"' + value.replace(/"/g, '""') + '"';
        }

        str += line + '\r\n';
      }
      return str;
    }

    var csv = JSON2CSV(data);

    saveAs(new Blob([csv],{type:"data:text/csv;charset=utf-8"}), fileName);

  }

});