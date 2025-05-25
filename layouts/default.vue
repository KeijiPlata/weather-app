<template>
    <div
        class="min-h-screen w-full bg-custompink text-black font-roboto p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center gap-5">
        <div class="w-full max-w-md flex flex-row items-center gap-2">
            <UInput icon="i-lucide-search" size="lg" variant="outline" color="neutral" class="flex-1"
                placeholder="Search ..." :ui="{
                    base: 'bg-custompink border border-black text-black placeholder:text-black focus:outline-black focus:border-black',
                    leadingIcon: 'text-black'
                }" />
            <Icon name="lucide:ellipsis-vertical" class="text-3xl text-black" />
        </div>
        <div class="w-full flex flex-1 items-center justify-center">
            <slot />
        </div>
    </div>
</template>
