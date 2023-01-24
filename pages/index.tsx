// import { faCar, faClock, faMobile } from '@fortawesome/free-solid-svg-icons'
import { Col, Row, Container } from 'react-bootstrap'
import SStyledImage from 'common/components/SStyledImage/SStyledImage'
import ServiceItem from 'common/components/ServiceItem/ServiceItem'
import styles from './index.module.scss'
import classNames from '../common/util/classNames'
import CallToAction from '../common/components/CallToAction/CallToAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faClock, faMobile } from '@fortawesome/free-solid-svg-icons'
import ContactInfo from '../common/components/ContactInfo/ContactInfo'
import Slider from '../common/components/Slider/Slider'
import MobileWorkingProcess from '../common/components/MobileWorkingProcess/MobileWorkingProcess'
import WorkingProcess from '../common/components/WorkingProcess/WorkingProcess'

export default function Home(): JSX.Element {
  return (
    <>
      <main>
        <Slider />

        <Container>
          <MobileWorkingProcess />
        </Container>
        <div className={styles.workingProcessContainer}>
          <Container>
            <WorkingProcess />
          </Container>
        </div>
        <div
          className={classNames(styles['bg-secondary'], styles.section)}
          style={{ padding: '60px 0px' }}>
          <Container>
            <Row className={styles.serviceItemRow}>
              <Col lg={6} className={styles.serviceItemCol}>
                <ServiceItem
                  src="/images/services/1.jpeg"
                  alt="Engine oil changing service"
                  header="Engine Oil"
                  text="In at orci at magna placerat rutrum vitae a felis. Aliquam quis commodo neque, faucibus laoreet urna."
                  buttonText="Learn More"
                  textColor="white"
                  align="left"
                />
              </Col>
              <Col lg={6} className={styles.serviceItemCol}>
                <ServiceItem
                  src="/images/services/2.jpeg"
                  alt="Engine oil changing service"
                  header="Engine Oil"
                  text="In at orci at magna placerat rutrum vitae a felis. Aliquam quis commodo neque, faucibus laoreet urna."
                  buttonText="Learn More"
                  textColor="white"
                  align="right"
                />
              </Col>
              <Col lg={12} className={styles.serviceItemCol}>
                <ServiceItem
                  src="/images/services/3.jpeg"
                  alt="Engine oil changing service"
                  header="Engine Oil"
                  text="In at orci at magna placerat rutrum vitae a felis. Aliquam quis commodo neque, faucibus laoreet urna."
                  buttonText="Learn More"
                  textColor="white"
                  align="left"
                />
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row style={{ padding: '60px 0px' }}>
            <Col>
              <SStyledImage src="/images/parts.jpeg" alt="Car parts" position="right" />
            </Col>
            <Col xs={12} md={6} lg={7}>
              <div className={styles.aboutUsContainer}>
                <h2 className={classNames('quick', styles.aboutUsHeader)}>About Us</h2>
                <h3 className={styles.aboutUsSubHeader}>
                  Find out briefly but informatively about us
                </h3>
                <p>
                  Molestiae praesentium itaque. Vitae consequatur minus cumque quia provident iure
                  eum error laboriosam. Iste aut eos rerum et. Labore maxime quia. Magnam officia
                  dolorem quia voluptate autem fugit dolorem assumenda aliquam. Quia hic quia
                  ducimus perferendis debitis.
                </p>

                {/* ICON BOX */}
                <div className={classNames('d-flex justify-content-around', styles.iconBox)}>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faClock} width={40} className={styles.icon} />
                    <span className={styles.span}>24/7 Exclusive On the Road</span>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faCar} width={40} className={styles.icon} />
                    <span className={styles.span}>From Business to Luxuryclass</span>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faMobile} width={40} className={styles.icon} />
                    <span className={styles.span}> Convenient Online Book</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className={classNames(styles['bg-secondary'], styles.section)}>
          <Container>
            <CallToAction />
          </Container>
        </div>

        <div className={styles.bgContactInfo}>
          <Container>
            <ContactInfo />
          </Container>
        </div>
      </main>
    </>
  )
}
