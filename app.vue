<script setup>
const { setLocale } = useI18n()
</script>

<template>
  <div>
    <button @click="setLocale('en')">en</button>
    <button @click="setLocale('fr')">fr</button>
  </div>
  <UCard>
    <template #header>
      <div class="h-8">{{ $t('welcome') }}</div>
    </template>
    <div class="h-16">{{ $t('message') }}</div>
    <template #footer>
      <div class="h-8">{{ $t('greeting.hello') }}</div>
    </template>
  </UCard>
</template>