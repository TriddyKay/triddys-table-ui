import React, {DependencyList, useEffect, useState} from 'react'
import {View, Text} from "react-native"
import {useAsyncEffect, usePromise} from "../hooks/PromiseHooks"
import {EchoService} from "../EchoService"

export const Details = () => {
  const [ echo ] = usePromise(EchoService.echo, " ", [])
  console.log("echo", echo)
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  )
}
