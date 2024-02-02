struct Solution {}

impl Solution {
    pub fn length_of_last_word(s: String) -> i32 {
        let mut rs = 0;
        let _s = s.chars().rev();

        for i in _s {
            if i != ' ' {
                rs += 1;
            } else {
                if rs == 0 {
                    continue;
                } else {
                    break;
                }
            }
        }

        rs
    }   
}

fn main() {
    let res = Solution::length_of_last_word("   fly me   to   the moon  ".to_owned());
    println!("res: {}", res);
}