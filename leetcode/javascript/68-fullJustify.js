/**
 * 给定一个单词数组 words 和一个长度 maxWidth ，重新排版单词，
 * 使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。
 * 你应该使用 “贪心算法” 来放置给定的单词；也就是说，尽可能多地往
 * 每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 
 * 个字符。
 * 
 * 要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分
 * 配，则左侧放置的空格数要多于右侧的空格数。
 * 文本的最后一行应为左对齐，且单词之间不插入额外的空格。
 */

/**
 * @description 文本左右对齐
 * @param {string[]} words
 * @param {number} maxWidth
 */
var fullJustify = function (words, maxWidth) {
    var len = words.length;
    var res = [];

    for (let i = 0; i < len; ++i) {
        var realLen = 0;
        let j = i;
        var tmp = [];

        for (; j < len; ++j) {
            var _len = words[j].length;
            realLen += _len;
            tmp.push(words[j]);
            if ((realLen + tmp.length - 1) > maxWidth) {
                realLen -= _len;
                tmp.pop(words[j]);
                break;
            }
        }

        i = j - 1;

        var str = '';

        if (i === words.length - 1) {
            var tmpStr = tmp.join(' ');
            str = tmpStr + ' '.repeat(maxWidth - tmpStr.length);
        } else {

            var spaceNum = maxWidth - realLen;

            for (let k = 0; k < tmp.length; ++k) {
                var subStr = '';
                var gap = Math.ceil(spaceNum / (tmp.length - k - 1));

                if (spaceNum >= gap) {
                    subStr = ' '.repeat(gap);
                    spaceNum -= gap;
                } else {
                    subStr = ' '.repeat(spaceNum);
                }

                str += (tmp[k] + (k === tmp.length - 1 ? '' : subStr));
            }


            if (str.length < maxWidth) {
                str += ' '.repeat(maxWidth - str.length);
            }
        }

        res.push(str);

        i = j - 1;
    }

    return res;
};

/**
 * 测试用例：
 * console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
 * console.log(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16));
 * console.log(fullJustify(["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"], 20));
 * console.log(fullJustify(["ask","not","what","your","country","can","do","for","you","ask","what","you","can","do","for","your","country"], 16));
 */

/**
 * 本题核心：无
 *
 * 反思：常规思路，先算出一行最多能容纳几个单词，这样空隙数就是单词数减一，
 * 之后依次计算空格最大间距，并拼到当前遍历的单词后。
 */