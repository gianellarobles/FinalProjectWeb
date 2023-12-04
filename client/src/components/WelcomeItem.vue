<template>
 <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 3;
  margin-left: 1rem;
}

i {
  display: absolute;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.5rem;
  font-weight: 550;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 640px) {
  .item {
    margin-top: 0;
    padding: 0.6rem 0 1rem calc(var(--section-gap)/4);
  }

  i {
    top: calc(50% - 20px);
    left: -15px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }
    .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
