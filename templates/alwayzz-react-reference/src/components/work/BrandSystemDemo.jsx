import { Stage } from '../../stageshow/kit/stage'
import { Bar, Text, Window } from '../../stageshow/kit/window'
import { Chip } from '../../stageshow/kit/parts/Chip'
import { Divider } from '../../stageshow/kit/parts/Divider'
import { Row } from '../../stageshow/kit/parts/Row'
import './brand-system.css'

/**
 * A still of the Sablewood brand system app: the logo library with one
 * lockup selected, and a detail card straddling the window's lower left
 * edge. Real words only on the selected lockup and the card; the rest of
 * the library is filler, so the eye lands where the story is.
 */

const NAV = ['Logos', 'Type', 'Colour', 'Icons', 'Motion']

export default function BrandSystemDemo() {
  return (
    <Stage
      width={720}
      height={400}
      compact={{ below: 420, width: 358, height: 300 }}
      className="aw-stage"
    >
      {() => (
        <>
          <Window url="app.sablewood.co" className="aw-window">
            <aside className="aw-sidebar">
              {NAV.map((label, index) => (
                <div className="aw-nav" data-on={index === 0 || undefined} key={label}>
                  <Bar w={12} h={12} r={4} tone={index === 0 ? 4 : 3} />
                  <Text className="aw-nav-label">{label}</Text>
                </div>
              ))}
            </aside>

            <div className="aw-main">
              <div className="aw-header">
                <Text className="aw-title">Logos</Text>
                <Chip className="aw-chip">12 assets</Chip>
              </div>

              <div className="aw-grid">
                <div className="aw-tile is-selected">
                  <Text className="aw-wordmark">SABLEWOOD</Text>
                </div>
                <div className="aw-tile">
                  <Bar w={86} h={12} r={3} tone={3} />
                </div>
                <div className="aw-tile">
                  <Bar w={64} h={12} r={3} tone={3} />
                </div>
              </div>

              <Divider className="aw-divider" />

              <div className="aw-rows">
                {[72, 58, 80, 46].map((w, index) => (
                  <Row pad={0} className="aw-row" key={index}>
                    <Bar w={18} h={18} r={5} tone={2} />
                    <Bar w={w} h={8} tone={3} />
                    <Bar w={34} h={8} tone={2} />
                  </Row>
                ))}
              </div>
            </div>
          </Window>

          <div className="aw-detail">
            <Text className="aw-detail-label">Selected</Text>
            <Text className="aw-detail-name">Primary lockup</Text>
            <div className="aw-detail-rule" />

            <div className="aw-detail-row">
              <Text className="aw-detail-key">Clearspace</Text>
              <Text className="aw-detail-value">0.25x</Text>
            </div>
            <div className="aw-detail-row">
              <Text className="aw-detail-key">Minimum size</Text>
              <Text className="aw-detail-value">24 px</Text>
            </div>

            <div className="aw-detail-foot">
              <Text className="aw-detail-key">Files</Text>
              <Text className="aw-detail-foot-value">SVG, PNG, EPS</Text>
            </div>
          </div>
        </>
      )}
    </Stage>
  )
}
