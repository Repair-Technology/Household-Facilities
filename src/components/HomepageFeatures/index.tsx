import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '自己动手维修',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       <p>除了可以节约费用,</p>

        <p>在前期准备过程中消磨时间,是良好的爱好;</p>

        <p>在维修过程中促进家人交流,成为全家的休闲活动;</p>

        <p>在维修后通过图文及视频分享,是健康的社交方式!</p>
      </>
    ),
  },
  {
    title: '正确维护修理',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       <p>使用正确的工具;</p>

       <p>使用正确的拆卸方法;</p>

        <p>使用正确的配件;</p>

        <p>组合成正确的维护修理!</p>
      </>
    ),
  },
  {
    title: '维修爱好者社区',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       <p>这里有共同爱好的人;</p>

        <p>这里有正确的维修手册;</p>

        <p>收获他人的知识,故事,快乐;</p>

        <p>也分享你的知识,故事,快乐!</p>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
