---
title: Markdown 功能测试
date: 2000-01-01 00:00:00
category: 测试
---

这里是 Markdown 功能的测试页面。

<!-- excerpt -->

普通文字

---

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

---

- [ ] 未选中
- [x] 选中

---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nisl purus in mollis nunc sed id semper risus in. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Fringilla phasellus faucibus scelerisque eleifend. Est ultricies integer quis auctor elit sed vulputate mi. Proin nibh nisl condimentum id venenatis a condimentum vitae. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Nulla aliquet porttitor lacus luctus accumsan tortor posuere.

Tortor at risus viverra adipiscing at in tellus. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Dui accumsan sit amet nulla facilisi morbi. Justo laoreet sit amet cursus sit amet. Nibh tortor id aliquet lectus proin nibh nisl. Viverra aliquet eget sit amet tellus cras. Sagittis purus sit amet volutpat consequat mauris nunc congue. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Leo vel orci porta non pulvinar. Tristique senectus et netus et malesuada fames. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Neque vitae tempus quam pellentesque nec. Eget nulla facilisi etiam dignissim diam quis enim. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Fames ac turpis egestas sed tempus urna. Nunc non blandit massa enim nec dui. Volutpat sed cras ornare arcu dui vivamus arcu. Dolor sit amet consectetur adipiscing elit pellentesque. Facilisis sed odio morbi quis commodo odio.

Aliquet bibendum enim facilisis gravida neque convallis. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Nisl pretium fusce id velit ut. Odio morbi quis commodo odio aenean sed adipiscing diam. Quam id leo in vitae turpis massa. Ipsum a arcu cursus vitae congue. Amet luctus venenatis lectus magna fringilla urna. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Mauris a diam maecenas sed enim ut sem. Vulputate dignissim suspendisse in est ante in nibh mauris. Massa eget egestas purus viverra accumsan in nisl. Maecenas sed enim ut sem viverra. Nibh mauris cursus mattis molestie a iaculis at erat. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Sem viverra aliquet eget sit amet tellus cras. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.

---

*斜体*、**粗体**、***加粗斜体***、~~删除线~~

---

在一个段落中的[文字链接](https://xecades.xyz)

---

* 无序列表项一
+ 无序列表项二
- 无序列表项三

---

1. 有序列表项一
2. 有序列表项二
3. 有序列表项三

---

图片展示

![图片测试](https://s1.ax1x.com/2022/05/01/OCQY80.png)

---

>>> 三级引用。Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
>>
>> 二级引用。Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
>
> 一级引用。Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

---

> 多个引用
> 
> 多个引用
> 
> 多个引用

---

小型嵌入 HTML 片段

<img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8px' height='8px'><circle cx='4' cy='4' r='4' opacity='.5'/></svg>"/>

---

行内代码块

> `scanf()` 用于输入数据，而 `printf()` 用于输出数据

---

代码块

```cpp
#include <stdio.h>

int main()
{
    printf("Hello world\n");
    return 0;
}
```