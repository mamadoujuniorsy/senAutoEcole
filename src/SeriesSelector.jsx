// SeriesSelector.jsx
import React from 'react';

const SeriesSelector = ({ series, selectedSeries, onChangeSeries }) => {
  return (
    <div>
      <h2>Veuillez choisir une série</h2>
      <label>Série :</label>
      <select value={selectedSeries} onChange={onChangeSeries}>
        {series.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SeriesSelector;
