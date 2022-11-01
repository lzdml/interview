-----------------

<end-time time="2022-11-01/转发" mood="心情: 还好" />

-----------------

Turbopack 发布后的各方反应
========

2022-10-26
--------

首先，10月26日，Vercel 发布了 Turbopack，自命 Webpack 继任者，号称速度比 Wepback 快 700 倍，比 Vite 快 10 倍。

这些是官推亮点：

> * ~700x faster than Webpack -> 比 Webpack 快 700 倍
> * 10x faster than Vite -> 比 Vite 快 10 倍
> * Native incremental architecture built with Rust -> 基于 Rust，具备原生可增长架构
> ◆ Support for React Server Components -> 支持 React 服务器组件
> ◆ Support for TS, JSX, CSS & more -> 支持 TS、JSX、CSS，以及更多

* https://twitter.com/vercel/status/1584961746418208774
* https://vercel.com/blog/turbopack

### 尤大观点

很快，Vite 作者 @youyuxi 就跟进表达反驳：

> “10x faster than Vite” isn’t entirely accurate

“‘比 Vite 快 10 倍’并不完全准确”，他说。

然后他进一步介绍了自己的理由：

> 1. Vite’s default React HMR is still babel-based, while Next/turbopack use swc/rust-based transform, so the HMR performance difference is a bit of apples to oranges.

因为 Vite 默认的 HMR 仍然基于 Babel，而Next/Turbopack 使用的是基于 Rust 平台的 SWC，所以这里 HMR 的性能差异是关公战秦琼（这个 thread 后面还有若干理由，我就不一一翻译了）：

> Vite can switch to the swc/rust transform if necessary, we currently chose not to do that because adding swc to the deps list is extra weight, and even without it HMR is fast enough.

Vite 当然可以在必要时切换到 swc/rust，但 Vite 开发团队并不想这样做，因为即使只用 Babel（不那样做），HMR 也足够快。使用 SWC 替换 Babel 只是平添开发负担。

> 2. turbopack does address Vite’s request congestion issue on large apps. On Vite side we are also exploring how we can solve this via upcoming browser features like web bundles.

2. Turbopack 确实解决了 Vite 在大型应用上的请求拥塞问题。我们 Vite 团队这边，也在探索如何解决这个问题，比如，是否可以借助即将推出的浏览器功能（Web Bundles）。

> In the long run we may also consider using turbopack under the hood to replace esbuild/Rollup (where suitable), due to its strong caching capabilities.

3. 从长远来看，由于 Turbopack 强大的缓存能力，我们也会考虑在底层使用 Turbopack 来替换 esbuild/Rollup。如果合适的话。

> 4. I’m glad vercel is investing its resources into a proper native-speed successor to webpack (as it should), and that our work on Vite has pushed this to happen. It’ll be interesting to see how it evolves - my hope is it can be made truly framework agnostic, not Next-first.

4. 我很高兴 Vercel 愿意投入资源，打造 Webpack 的继任者，并着力提升它们的速度表现（应该如此），我们在 Vite 上的努力也达到了这样的目的。我对它们未来的演变很感兴趣——我希望它不要和框架捆绑在一起，不要 Next-first。

### Sean Larkin 观点

（Sean Larkin 是 Webpack 的作者和核心开发者。目前好像在 LinkedIn 工作，好像。）

Sean Larkin 也表达了自己的观点：

> Few thoughts: 几点想法：
> 1. Love the innovation but it looks moderately SWC powers and wish there was some more callout there. 
> 2. Disappointed how entangled this is with next/turborepo. But Vercel needs to make 💸🤑. 
> 3. The path of migration from webpack for the avg user will be hard.
> 4. I like that the dev server is still bundling modules because ESM slower than raw ESM. I need to peel back more layers to try and get a standalone implementation working. 
> 5. It's all in alpha so we need to still look at the broader view but I hope we're selling less going fwd

1. 我喜欢创新。但看起来，Turbopack 更多是借力于 SWC，希望对方能表达得清楚一些。
2. 我对 Turborepo 与 Next 的绑定程度感到失望。但是 Vercel 需要挣到更多的 💸🤑（天使资金），没办法。
3. 普通用户想 Webpack 迁移过去，会很艰难。
4. 我倾向于开发服务器上的模块仍然是打包后的，因为 ESM 比原始 ESM 慢。我需要剥离更多层，才能让独立的实现工作。
5. 目前它还处于 alpha 阶段，所以我们要看开一点，但我仍然希望，销售手腕少一些，好好干开发。

2022-10-27 ～ 2022-10-28
--------

原文已被删除，不过这期间，@youyuxi 觉得 Turbopack 的数据有些问题，提出了一些疑问。

但事后，他推翻了这些评价。

2022-10-27
--------

Vite 核心成员之一，antfu7 在知乎上表达了自己的观点：

他认为 Vite 更吸引人的是其插件系统，和构建在上面的生态系统。这样才能将改进快速带给其他领域。Turbopack 方面，静观其变吧。

> https://zhihu.com/question/562349205/answer/2733040669
> 如何评价Vercel开源的使用Rust实现的Turbopack? - Anthony Fu的回答 - 知乎

2022-10-29
--------

经过几天实验，Vite 作者 @youyuxi 发表了新的推文，新推文介绍了他进一步比较 Turbopack 和 Vite 之间性能之后，得到的新结论。

> I updated the vite vs next/turbo benchmark by using swc to transform React refresh for vite. To avoid confusion, I have deleted the previous two tweets with outdated numbers.
> 
> Latest numbers:
> - root: vite 338.2ms / next 334.6ms
> - leaf: vite 141.8ms / next 84.4ms

我通过搭配 Vite+SWC，重新评测 React 转换之后，更新 Vite vs Next/Turbopack 的基准测试。为避免混淆，我删除了前两条带有过时数字的推文。

最新的对比数字：
- 根：Vite 338.2ms / Next 334.6ms
- 叶：Vite 141.8ms / Next 84.4ms

> The swc transform helps a lot in the root component case because the file is big, and previously cost 300ms in babel transforms alone. This makes vite almost exactly the same speed with turbopack.

SWC 转换在根组件时候提供了很大帮助。因为文件很大，以前仅在 Babel 中转换就要花费 300 毫秒。替换之后，Vite 的速度几乎与 Turbopack 完全相同。

> Interestingly, in leaf scenarios turbopack is still 69% faster - this entails that Vite HMR actually caught up with turbopack as the file gets bigger, potentially scaling better in larger apps.

有趣的是，在叶子场景中，Turbopack 的速度仍然更快，高达 69%。——这意味着随着文件变大，Vite HMR 实际上赶上了 Turbopack，在较大的应用程序中可能会有更好的扩展性。

> 测试用仓库：https://github.com/yyx990803/vite-vs-next-turbo-hmr

> Because we are now testing the HMR of the same framework with the same set of transforms, the result is more relevant for other frameworks compared to previously posted numbers.

现在，因为我们使用相同的转换集测试同一框架的 HMR，与之前发布的数字相比，结果的相关度更高。

> Just to add a bit of context - in this benchmark, even before using swc for React transforms, turbo is only 2x compared to vite (compared to marketed 10x). So the difference wasn’t that drastic to begin with.

顺便讲点相关前提：这套基准测试，甚至在替换使用 SWC 转换 React 之前，与 Vite 相比，Turbo 也会仅 2 倍（他们市场宣称要快 10 倍）。所以其实一直以来，差异都没有那么大。

--------

总结
--------

Turbopack 可能不如官方所说的那么好。它的确带来了 HMR 的提升，但代价是不健全的插件机制和生态环境，以及难以被前端团队掌握的 Rust 平台。

未来一段时间，我们可能还要继续坚持在 Vite 平台上。