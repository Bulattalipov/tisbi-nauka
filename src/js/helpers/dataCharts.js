let dataCharts = {
  chart1: {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: '# students',
      data: [4, 6, 10, 14, 18],
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: [
        'rgba(226, 226, 226, 0.5)',
        'rgba(226, 226, 226, 0.5)',
        'rgba(226, 226, 226, 0.5)',
        'rgba(226, 226, 226, 0.5)',
        'rgba(247, 37, 133, 1)',
      ],
    }]
  },
  chart2: {
    labels: [
      'Java',
      'SQL',
      'HTML',
      'CSS',
      'C#',
      'Прочие'
    ],
    datasets: [{
      label: 'Студенты',
      data: [20, 18, 17, 16, 15, 16],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)',
        'rgb(256, 256, 256)'
      ]
    }]
  },
  chart3: {
    labels: [
      'от 100 т. руб.',
      '80-100 т. руб',
      '60-80 т. руб',
      'до 60 т. руб',
    ],
    datasets: [{
      label: 'Студенты',
      data: [300, 50, 100, 200],
      backgroundColor: [
        'rgb(45, 47, 140)',
        'rgb(255, 195, 0)',
        'rgb(181, 23, 158)',
        'rgb(256, 256, 256)',
      ],
      hoverOffset: 4
    }]
  },
}
