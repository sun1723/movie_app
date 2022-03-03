import '../utils/score_box.scss'
import { ContentDetail } from './ContentDetail'

export const ScoreBox = ({rate, noBorder}) => {
  return (
    <div className={noBorder ? 'score-box no_border' : 'score-box'}>
      <ContentDetail title="value" content={rate.Value} noTitle={true}/>
      <ContentDetail title="source" content={rate.Source} noTitle={true}/>
    </div>
  )
}