<template>
  <base-alert type="bg-danger" :content="content" :button="button" />
</template>

<script>
import BaseAlert from '@/components/BaseAlert';

export default {
  name: 'ErrorAlert',

  components: {
    BaseAlert,
  },

  data: () => {
    return {
      content:
        'Ops! Something bad happened. Please refresh the page. If this error persists, contact the support server.',
      button: {
        link: 'https://discord.com/invite/8g3jnxv',
        action: 'Join now',
      },
    };
  },
};
</script>

