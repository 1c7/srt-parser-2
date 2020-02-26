interface Line {
  id: string;
  startTime: string;
  endTime: string;
  text: string;
}

export default class Parser {
  
  private tryComma(data: string) {
    data = data.replace(/\r/g, "");
    var regex = /(\d+)\n(\d{2}:\d{2}:\d{2},\d{3}) --> (\d{2}:\d{2}:\d{2},\d{3})/g;
    let data_array = data.split(regex);
    data_array.shift(); // remove first '' in array
    return data_array;
  }

  private tryDot(data: string) {
    data = data.replace(/\r/g, "");
    var regex = /(\d+)\n(\d{2}:\d{2}:\d{2}\.\d{3}) --> (\d{2}:\d{2}:\d{2}\.\d{3})/g;
    let data_array = data.split(regex);
    data_array.shift(); // remove first '' in array
    return data_array;
  }

  fromSrt(data: string) {
    var originalData = data;
    var data_array = this.tryComma(originalData);
    if (data_array.length == 0) {
      data_array = this.tryDot(originalData);
    }

    var items = [];
    for (var i = 0; i < data_array.length; i += 4) {
      var new_line = {
        id: data_array[i].trim(),
        startTime: data_array[i + 1].trim(),
        endTime: data_array[i + 2].trim(),
        text: data_array[i + 3].trim()
      };
      items.push(new_line);
    }

    return items;
  }

  toSrt(data: Array<Line>) {
    var res = '';

    for (var i = 0; i < data.length; i++) {
      var s = data[i];
      res += s.id + "\r\n";
      res += s.startTime + " --> " + s.endTime + "\r\n";
      res += s.text.replace("\n", "\r\n") + "\r\n\r\n";
    }

    return res;
  }
}