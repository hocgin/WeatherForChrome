import styles from './index.less';
import React from 'react';
import classname from 'classname';
import { Timeline } from 'antd';
import Util from '@/util/util';
import Formatter from '@/util/formatter';

class index extends React.PureComponent {
    render() {
        let { className = {}, datasource = [] } = this.props;
        return (<div className={classname(className, styles.component)}>
            <Timeline>
                {(datasource || []).map(({ date, skycon, aqi, maxTemp, minTemp }, index) => {
                    let airText = Formatter.toAirText(aqi);
                    return (<Timeline.Item key={`${index}`}>
                          <div className={styles.WItem}>
                              <div className={styles.date}>{Formatter.fromNow2(date)}</div>
                              <div className={styles.image}>
                                <img src={Util.getSkyconSvg(skycon)} alt={`${skycon}`}/>
                              </div>
                              <div className={styles.air}
                                style={{
                                  backgroundColor: `${airText.backgroundColor}`
                              }}>{airText.text}</div>
                              <div>↓{minTemp}&deg;</div>
                              <div>↑{maxTemp}&deg;</div>
                          </div>
                      </Timeline.Item>);
                })}
            </Timeline>
        </div>);
    }


}

export default index;