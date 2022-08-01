### 第6章 CSS3动画

#### 6.1 Animation 动画
    CSS3动画属性包括：
        animation 绑定动画属性
        @keyframes 关键帧
##### 6.1.1 关键帧动画-定义@keyframes关键帧
    i. 示例：
        定义关键帧
            @keyframes boxrotate{
                0% {background: #808000; left: 0px; top:0px}
                50% {background: #008080; left: 200px; top:0px;transform: rotate(-180deg);}
                100% {background: #00ffff; left: 400px; top:0px}
            }
    ii. 浏览器前缀
            @-webkit-keyframes boxrotate{
                0% {background: #808000; left: 0px; top:0px}
                50% {background: #008080; left: 200px; top:0px;transform: rotate(-180deg);}
                100% {background: #00ffff; left: 400px; top:0px}
            }
    定义关键帧后需要绑定到目标元素上，使目标元素能够执行该关键帧
##### 6.1.2 绑定动画-animation属性
    i. 常用animation属性
属性                       |         	描述
:-------------------------:|:-------------------------:|
@keyframes	               |规定动画。
animation	               |所有动画属性的简写属性，除了 animation-play-state 属性。
animation-name	           |规定 @keyframes 动画的名称。
animation-duration	       |规定动画完成一个周期所花费的秒或毫秒。默认是 0。
animation-timing-function  |规定动画的速度曲线。默认是 "ease"。
animation-delay	           |规定动画何时开始。默认是 0。
animation-iteration-count  |规定动画被播放的次数。默认是 1，infinite是无限次播放。
animation-direction	       |规定动画是否在下一周期逆向地播放。默认是 "normal"。
animation-play-state	   |规定动画是否正在运行或暂停。默认是 "running"。
animation-fill-mode	       |规定对象动画时间之外的状态。

    ii. 绑定关键帧动画及兼容浏览器
        .colorbox-2{
            animation: boxrotate 3s infinite;
            -o-animation: boxrotate 3s infinite;        /*Opera*/
            -moz-animation: boxrotate 3s infinite;      /*Firefox*/
            -webkit-animation: boxrotate 3s infinite;   /*safari and Chrome*/
        }
        @keyframes boxrotate{
            0% {background: #808000; left: 0px; top:0px}
            50% {background: #008080; left: 200px; top:0px;transform: rotate(-180deg);}
            100% {background: #00ffff; left: 400px; top:0px}
        }
    IE10、Firefox以及Opera支持@keyframes规则和animation属性。
    Chrome和Safari需要前缀-webkit-。IE9及更早版本不支持@keyframes和animation

#### 6.1 Transition 动画
    Transition是一种过渡，它控制元素从一种样式转变为另一种样式的效果。
    为了实现这一点必须规定两项内容：
        1.哪个CSS属性发生变化。
        2.规定效果的时长。

##### 6.2.1 Transition 过渡
    i. 使用场景
        在CSS为hover等伪类,提供显示隐藏或变化属性，如：display、z-index、visibility、zoom等
        这些动作形成的动画没有过渡效果，会出现突然变化的效果而显得十分生硬，此时加上过渡效果
        
    ii. 示例：
        
    IE10、Firefox以及Opera支持transition属性。
    Chrome25及更早版本和Safari需要前缀-webkit-。IE9及更早版本不支持transition属性