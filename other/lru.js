/**
 * @description Least Recently used，最近最少使用算法
 * 核心：利用Map key有序的且读取时O(1)的特性
 * 主要分为写入和读取两个操作
 * 写入操作要点：判断已有则更新内容，并且放到最新位置，如果超过容量则删除最旧的再进行追加插入
 * 读取操作要点：判断是否存在，存在则需要先删除再追加到最新位置
 */
class LRUCache {
    constructor (n) {
        this.size = n;
        this.data = new Map();
    }

    put (key, value) {
        if (this.data.has(key)) {
            this.data.delete(key);
            this.data.set(key, value);
            return;
        }

        if (this.data.size >= this.size) {
            const _key = this.data.keys().next().value;
            this.data.delete(_key);
        }

        this.data.set(key, value);
    }

    get (key) {
        if (this.data.has(key)) {
            const value = this.data.get(key);
            this.data.delete(key);
            this.data.set(key, value);
            return value;
        }

        return false;
    }
}

const lruCache = new LRUCache(2);

lruCache.put('foo', 1);
lruCache.put('bar', 2);
lruCache.put('baz', 3);

console.log(lruCache.data);

lruCache.put('baa', 4);
lruCache.put('ffo', 5);

console.log(lruCache.data);

lruCache.get('baa');

console.log(lruCache.data);


