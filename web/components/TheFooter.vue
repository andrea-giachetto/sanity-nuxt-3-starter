<template>
  <div class="bg-brand-gray-50 dark:bg-brand-gray-700">
    <div class="container">
      <svgo-logo
        :fontControlled="false"
        class="w-72 pt-16"
      />
      <div
        class="grid grid-cols-1 lg:grid-cols-2 py-16 gap-12"
      >
        <nav class="flex flex-col gap-1">
          <nuxt-link
            class="font-brand-secondary text-2xl"
            to="/"
            >News</nuxt-link
          >
          <nuxt-link
            class="font-brand-secondary text-2xl"
            to="/"
            >Attualitá</nuxt-link
          >
          <nuxt-link
            class="font-brand-secondary text-2xl"
            to="/"
            >Quartieri di Roma</nuxt-link
          >
          <nuxt-link
            class="font-brand-secondary text-2xl"
            to="/"
            >Temi</nuxt-link
          >
          <nuxt-link
            class="font-brand-secondary text-2xl"
            to="/"
            >Segnalazioni</nuxt-link
          >
        </nav>
        <div>
          <p>
            La Capitale, il nuovo giornale online di Roma
          </p>
          <p class="mt-4">
            La Capitale, è una testata giornalistica
            iscritta nel Registro Stampa del Tribunale di
            Roma il 25 luglio 2024, n. 100/2024
          </p>
          <p class="mt-4">
            DIRETTORE RESPONSABILE <br />Enrico Sarzanini
          </p>
        </div>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-4 gap-6 py-6 min-h-64 border-y border-brand-gray-700 dark:border-brand-gray-50"
      >
        <div>
          <h6>SEDE LEGALE</h6>
          <p class="mt-2">
            Via Giuseppe Gioacchino Belli, 86 <br />
            Roma - 00193
          </p>
        </div>
        <div>
          <h6>FOLLOW US</h6>
          <SocialArray class="mt-4" />
        </div>
        <div class="flex flex-col gap-2">
          <nuxt-link to="/">Chi Siamo</nuxt-link>
          <nuxt-link to="/">Privacy Policy</nuxt-link>
          <nuxt-link to="/">Contatti</nuxt-link>
        </div>
      </div>

      <div class="py-6">
        <span class="text-brand-gray-300">ORA EDITORIALE SRL P.IVA 17596711006</span>
      </div>
    </div>
  </div>
</template>
