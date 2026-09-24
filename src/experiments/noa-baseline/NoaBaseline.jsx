import { Helmet } from 'react-helmet-async';
import './noa-baseline.css';

export default function NoaBaseline() {
  return (
    <div className="noa-baseline-lab">
      <Helmet>
        <title>Noa Baseline Lab | PatagoniaCoach</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="noa-baseline-lab__card">
        <span className="noa-baseline-lab__tag">FASE 12A • LABORATORIO</span>
        <h1 className="noa-baseline-lab__title">NOA BASELINE LAB</h1>
        <p className="noa-baseline-lab__text">
          Branch: <code>experiment/noa-patagoniacoach-v2</code>
        </p>
      </div>
    </div>
  );
}
