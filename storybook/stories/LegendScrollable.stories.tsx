import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { LegendScrollable } from '../../src'

export default {
  title: 'Example/LegendScrollable',
  component: <></>,
  tags: ['autodocs'],
}
const colors = ['#8884d8', '#82ca9d', '#ff7a45', '#bae637', '#36cfc9', '#f759ab', '#b37feb']
const dataValues = [100, 200, 255, 300, 400, 350, 250, 150, 50]
export const Right = {
  render: ({ itemsCount, scrollbarStyle }) => {
    type LineType = {
      key: string
      color: string
    }
    const data: Array<object> = []
    const lines: Array<LineType> = []
    for (let i = 0; i < itemsCount; i++) {
      lines.push({ key: `line${i}`, color: colors[i % colors.length] })
    }
    for (let i = 0; i < 12; i++) {
      const dataCurrent = {
        name: `Page ${String.fromCharCode(65 + (i % 26))}`,
      }
      for (let j = 0; j < lines.length; j++) {
        dataCurrent[lines[j].key] = dataValues[(i + j) % dataValues.length] + i * 10
      }
      data.push(dataCurrent)
    }

    return (
      <div>
        <LineChart width={530} height={250} data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis yAxisId='right' />
          <Tooltip wrapperStyle={{ overflowY: 'auto', maxHeight: 250, pointerEvents: 'all' }} />
          <LegendScrollable
            align='right'
            layout='vertical'
            wrapperStyle={{
              top: '50%',
              right: -25,
              transform: 'translate(0, -50%)',
            }}
            scrollbarStyle={scrollbarStyle}
          />
          {lines.map((line) => (
            <Line key={line.key} dataKey={line.key} stroke={line.color} activeDot={{ r: 8 }} yAxisId='right' />
          ))}
        </LineChart>
      </div>
    )
  },
  args: {
    itemsCount: 50,
    scrollbarStyle: 'default',
  },
  argTypes: {
    itemsCount: { control: { type: 'range', min: 1, max: 150 } },
    scrollbarStyle: { control: 'radio', options: ['none', 'default'] },
  },
}
export const Bottom = {
  render: ({ itemsCount, scrollbarStyle }) => {
    type LineType = {
      key: string
      color: string
    }
    const data: Array<object> = []
    const lines: Array<LineType> = []
    for (let i = 0; i < itemsCount; i++) {
      lines.push({ key: `line${i}`, color: colors[i % colors.length] })
    }
    for (let i = 0; i < 12; i++) {
      const dataCurrent = {
        name: `Page ${String.fromCharCode(65 + (i % 26))}`,
      }
      for (let j = 0; j < lines.length; j++) {
        dataCurrent[lines[j].key] = dataValues[(i + j) % dataValues.length] + i * 10
      }
      data.push(dataCurrent)
    }
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip wrapperStyle={{ overflowY: 'auto', maxHeight: 250, pointerEvents: 'all' }} />
        <LegendScrollable align='center' scrollbarStyle={scrollbarStyle} />
        {lines.map((line) => (
          <Line key={line.key} dataKey={line.key} stroke={line.color} activeDot={{ r: 8 }} />
        ))}
      </LineChart>
    )
  },
  args: {
    itemsCount: 50,
    scrollbarStyle: 'default',
  },
  argTypes: {
    itemsCount: { control: { type: 'range', min: 1, max: 150 } },
    scrollbarStyle: { control: 'radio', options: ['none', 'default'] },
  },
}
