import React, { useState } from 'react'
import { PullToRefresh, List, InfiniteScroll } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'

function getNextData() {
  const ret = []
  for (let i = 0; i < 18; i++) {
    ret.unshift(Math.random())
  }
  return ret
}

export default () => {
  const [data, setData] = useState(() => getNextData())
  return (
    <>
      <PullToRefresh
        onRefresh={async () => {
          await sleep(1000)
          setData([...getNextData(), ...data])
        }}
      >
        <List style={{ minHeight: '100vh' }}>
          {data.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </PullToRefresh>
      <InfiniteScroll hasMore={true} loadMore={async () => {
        console.log('123'); 
        await sleep(1000);
        setData([...getNextData(), ...data])
      }} />
    </>
  )
}