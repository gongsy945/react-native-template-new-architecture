/**
 * ES6 mods not (yet) supported for typed .tsx
 * Preserve .js ext for correct storybook.requires.js codegen
 */

// import { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
// import type { DecoratorFunction } from '@storybook/addon-actions'

/**
 * @type decorators: DecoratorFunction[]
 * @type StoryFn: FC
 */
export const decorators = [
  StoryFn => (
    <View style={styles.container}>
      <StoryFn />
    </View>
  ),
  withBackgrounds
]

export const parameters = {
  some_param: 'some value',
  backgrounds: [
    { name: 'plain', value: 'white', default: true },
    { name: 'warm', value: 'hotpink' },
    { name: 'cool', value: 'deepskyblue' }
  ]
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8 }
})