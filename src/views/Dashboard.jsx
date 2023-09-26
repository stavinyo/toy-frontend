
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import { toyService } from '../services/toy.service';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Dashboard() {
    const [toys, setToys] = useState(null)
    const [currChart, setCurrChart] = useState('doughnut')

    useEffect(() => {
        toyService.query(toyService.getDefaultFilterBy(), { sortBy: '' })
            .then(toys => {
                setToys(toys)
            })
    }, [])

    function handleChartTypeChange(ev) {
        setCurrChart(ev.target.value)
    }

    const toysLabels = toyService.getLabelsMap(toys, 'key')
    console.log('toysLabels', toysLabels)
    const toysCountByLabels = toyService.getLabelsMap(toys, 'value')

    const data = {
        labels: toysLabels,
        datasets: [
            {
                label: 'Toys count',
                data: toysCountByLabels,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 139, 64, 0.2)',
                    'rgba(233, 50, 64, 0.2)',
                    'rgba(211, 180, 88, 0.2)',
                    'rgba(180, 69, 100, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(233, 50, 64, 1)',
                    'rgba(211, 180, 88, 1)',
                    'rgba(180, 69, 100, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
    return (
        <div>
            <div>
                <label htmlFor="chartType">Select Chart Type:</label>
                <select id="chartType" onChange={handleChartTypeChange}>
                    <option value="doughnut">Doughnut</option>
                    <option value="pie">Pie</option>
                </select>
            </div>

            {currChart === 'doughnut' && (
                <section style={{ maxWidth: '80vw', margin: 'auto' }}>
                    <Doughnut
                        data={data}
                        width={400}
                        height={400}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                        }}
                    />
                </section>
            )}

            {currChart === 'pie' && (
                <section style={{ maxWidth: '80vw', margin: 'auto' }}>
                    <Pie
                        data={data}
                        width={400}
                        height={400}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                        }}
                    />
                </section>
            )}
        </div>
    )
}
