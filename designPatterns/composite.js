/**
 * 组合模式
 * 概念：将具有一系列一致性操作的对象组合成具有部分与整体关系的结构
 * 1、组合对象可添加子对象，叶对象无法再添加对象
 * 2、可结合中介者模式实现父子对象之间的双向映射关系
 * 3、可结合职责链模式提高该模式的性能
 */

/**
 * 组合模式（例：可支持引用父对象的文件夹扫描）
 */
var Folder = function (name) {
    this.name = name;
    this.parent = null;
    this.files = [];
}

Folder.prototype.add = function (file) {
    for (var i = 0; i < this.files.length; ++i) {
        if (this.files[i].name === file.name) {
            throw new Error('该文件夹下存在同名文件或文件夹');
        }
    }

    this.files.push(file);
    file.parent = this;
}

Folder.prototype.scan = function () {
    if (!this.files.length) {
        return;
    }

    console.log('开始扫描文件夹：', this.name);

    for (var i = 0; i < this.files.length; ++i) {
        this.files[i].scan();
    }
}

Folder.prototype.remove = function () {
    if (!this.parent) {
        this.files = [];
        return;
    }

    for (var i = 0; i < this.files.length; ++i) {
        if (this.parent.files[i].name === this.name) {
            this.parent.files.splice(i, 1);
            break;
        }
    }
}

var File = function (name) {
    this.name = name;
    this.parent = null;
}

File.prototype.add = function () {
    throw new Error('不能在文件上新建文件');
}

File.prototype.scan = function () {
    console.log('开始扫描文件：', this.name);
}

File.prototype.remove = function () {
    if (!this.parent) {
        return;
    }

    for (var i = 0; i < this.parent.files.length; ++i) {
        if (this.parent.files[i].name === this.name) {
            this.parent.files.splice(i, 1);
            break;
        }
    }
}

var folder1 = new Folder('dataStructure');
var folder2 = new Folder('designPatterns');

var file1 = new File('tree.js');
var file2 = new File('graph.js');

var file3 = new File('singleton.js');

folder1.add(file1);
folder1.add(file2);
folder2.add(file3);

var folder = new Folder('algorithm');
folder.add(folder1);
folder.add(folder2);

var file4 = new File('graph.js');
folder1.add(file4)

// folder1.remove();

folder.scan();
