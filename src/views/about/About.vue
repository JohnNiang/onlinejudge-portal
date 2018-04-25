<template>
  <div>
    <section class="section-tertiary">
      <div class="container container-small">
        <h4>关于</h4>
        <p>CJ OJ是一个全新的OJ框架，实现了全数据集，单数据集和带权重单数据集多种评判模式.</p>
        <br>
        <h4>项目特色与创新点</h4>
        <h6>系统地研究程序正确性在线评判模式</h6>
        <p>
          目前，全数据集评判模式应用较广，单数据集评判模式应用较少，带权重单数据集鲜有研究。本项目拟系统地研究这三种评判模式的特点和实现方式。
        </p>
        <h6>在OJ系统中实现全数据集、单数据集、带权重单数据集三种评判模式</h6>
        <p>
          目前，大部分在线评判（Online Judge, OJ）系统实现的是全数据集评判模式，蓝桥杯大赛练习系统等实现的是单数据集评判模式，目前国内尚无实现多种评判模式的OJ系统。本项目拟在OJ系统中实现全数据集、单数据集、带权重单数据集三种评判模式。
        </p>
        <h6>CJ OJ系统能适应不同应用需求</h6>
        <p>
          目前，各类程序设计类学科竞赛在国内高校日益推广，参赛面和影响力越来越大，急需一种能适应采用不同评判模式的程序设计竞赛的OJ系统；此外，传统的编程实践需要人工评判，这种实践方式评判不及时、主观性强，学生难以及时发现程序中的问题，老师也难以及时检验学生的学习效果，OJ系统能改变传统编程实践形式落后的现状。本项目拟开发OJ系统能适应上述不同需求，具有较广的应用前景。
        </p>

        <h4>评判系统</h4>
        <h6>判题结果</h6>
        <ol>
          <li>Accepted: 你的答案符合判题标准</li>
          <li>Runtime Error: 你的程序运行时出现错误（指针越界，栈溢出，有未处理的异常，主函数返回值非零等）</li>
          <li>Time Limit Exceeded: 你的程序执行时间超出题目要求</li>
          <li>Memory Limit Exceeded: 你的程序内存使用超出题目要求</li>
          <li>Compile Error: 你的程序在编译（包括链接）时出现错误</li>
          <li>Wrong Answer: 你的程序输出的答案不符合判题标准</li>
          <li>System Error: 判题系统发生故障，请等待重判</li>
          <li>Waiting: 你的提交正在等待处理</li>
        </ol>

        <h6>编译参数</h6>
        <ol>
          <li>C（GCC 4.8）</li>
          <pre>gcc -DONLINE_JUDGE -O2 -w -std=c99 {src_path} -lm -o {exe_path}main</pre>
          <li>C++（G++ 4.3）</li>
          <pre>g++ -DONLINE_JUDGE -O2 -w -std=c++11 {src_path} -lm -o {exe_path}main</pre>
          <li>Java（Oracle JDK 1.7）</li>
          <pre>
//编译
javac {src_path} -d {exe_path}
//运行
java -cp {exe_path} Main</pre>

        </ol>

        <h4>常见问题</h4>
        <ol>
          <li>无特殊说明，请使用标准输入输出。</li>
          <li>Java 代码需使用 Main 作为主类名。C/C++代码使用
            <code>int main()</code>，并且需要
            <code>return 0;</code>。</li>
          <li>C/C++ 的64位整数类型，请使用
            <code>long long</code> 声明，使用
            <code>cin/cout</code> 或
            <code>%lld</code> 输入输出。 使用
            <code>__int64</code>会导致编译错误。</li>
          <li>程序执行时间指CPU时间，占用内存按执行过程中内存消耗的峰值计，有多组测试数据时以最大的时间和内存消耗为准</li>
          <li>判题的时候会去除你的输出的最后的换行和空格，然后与去除最后的换行和空格的答案做比较，如果不一致就是 Wrong Answer。 其余的行末空格和空行不去除，看清楚题目的要求。没有格式错误。
          </li>
        </ol>

      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about_wrapper {
  padding: 20px;
}
h4 {
  text-align: center;
  margin-top: 50px;
  &:first-child {
    margin-top: 0;
  }
}
</style>
