import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DateHeader from './DateHeader';
import { getMetricMetaInfo } from '../utils/helpers';
import { grey } from '../utils/colors'

export default function MetricCard ({ date, metrics }) {
  return (
    <View>
      {data && <DateHeader date={date} />}
      {Object.keys(metrics).map((metric) => {
        const { getIcon, displayName, unit, backgroundColor } = getMetricMetaInfo(metric)

        return (
          <View style={styles.metric} key={metric}>
            {getIcon()}
            <View>
              <Text style={{fontSize: 20}}>
                {displayName}
              </Text>
            </View>
            <Text style={{fontSize: 16, color: grey}}>
              {metrics[metric]} {unit}
            </Text>
          </View>
        )
      }) }
    </View>
  )
}

const style = StyleSheet.create({
  metric: {
    flexDirection: 'row',
    marginTop: 12,
  }
})